export class PhoneNumberUtil {
    static formatPhoneNumber(phoneNumber: string): string {
        const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

        if (numericPhoneNumber.startsWith('0')) {
            return '254' + numericPhoneNumber.slice(1);
        }

        if (numericPhoneNumber.startsWith('254')) {
            return numericPhoneNumber;
        }

        return numericPhoneNumber;
    }
}
