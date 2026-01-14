import { Injectable } from '@angular/core';
import { User } from './user.type'; // Import WebCryptoService
import { WebCryptoService } from '../../crypto.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * Constructor
   */
  constructor(private cryptoService: WebCryptoService) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for user (decrypting the encrypted data)
   */
  get user$(): Promise<User | null> {
    const encryptedUser = localStorage.getItem('auth_user');
    if (encryptedUser) {
      // Decrypt the data using WebCryptoService
      return this.cryptoService.decrypt(encryptedUser)
        .then((decryptedUser) => decryptedUser)
        .catch((error) => {
          console.error('Error decrypting user data', error);
          return null;
        });
    }
    return Promise.resolve(null);
  }

  /**
   * Setter for user (encrypting the user data before storing)
   *
   * @param value
   */
  set user(value: User) {
    if (value) {
      // Encrypt the user data before storing
      this.cryptoService.encrypt(value).then((encryptedData: string) => {
        localStorage.setItem('auth_user', encryptedData);
      });
    } else {
      localStorage.removeItem('auth_user');
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the current logged in user data
   */
  async get(): Promise<User | null> {
    return await this.user$;
  }

  /**
   * Update the user
   *
   * @param user
   */
  update(user: User): void {
    this.user = user;
  }
}
