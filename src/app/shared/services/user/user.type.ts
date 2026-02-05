export interface User
{
    userId?: string;
    name?: string;
    username?: string;
    fkBusiness? : string;
    // phone: string;
    userPhone?: string;
    fkSubUserType?: string;
    subUserTypeName?: string;
    subUserTypeLevel: number;
    userTypeLevel:number;
}
