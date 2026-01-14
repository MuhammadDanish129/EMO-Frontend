// src/app/shared/services/web-crypto.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebCryptoService {
  private secretKey = 'enexol$2024!'; // You can replace this or inject from env

  async getKey(): Promise<CryptoKey> {
    const enc = new TextEncoder();
    const keyData = enc.encode(this.secretKey.padEnd(32, '0').substring(0, 32)); // AES-256 requires 32-byte key
    return await crypto.subtle.importKey(
      'raw',
      keyData,
      'AES-GCM',
      false,
      ['encrypt', 'decrypt']
    );
  }

  async encrypt(data: any): Promise<string> {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await this.getKey();
    const encoded = new TextEncoder().encode(JSON.stringify(data));

    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encoded
    );

    const encryptedData = new Uint8Array(encrypted);
    const fullData = new Uint8Array(iv.length + encryptedData.length);
    fullData.set(iv, 0);
    fullData.set(encryptedData, iv.length);

    return btoa(String.fromCharCode(...fullData));
  }

  async decrypt(encryptedStr: string): Promise<any> {
    const fullData = Uint8Array.from(atob(encryptedStr), (c) => c.charCodeAt(0));
    const iv = fullData.slice(0, 12);
    const data = fullData.slice(12);

    const key = await this.getKey();
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      data
    );

    const decoded = new TextDecoder().decode(decrypted);
    return JSON.parse(decoded);
  }
}
