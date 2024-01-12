const applyMask = (rawValue: string, mask: string, char: string): string => {
    let maskedValue = '';
    let rawIndex = 0;

    for (let i = 0; i < mask.length && rawIndex < rawValue.length; i++) {
        if (mask[i] === char) {
            if (/\d/.test(rawValue[rawIndex])) {
                maskedValue += rawValue[rawIndex];
                rawIndex++;
            } else {

                rawIndex++;
                i--;
            }
        } else {
            maskedValue += mask[i];
            if (mask[i] === rawValue[rawIndex]) {
                rawIndex++;
            }
        }
    }

    return maskedValue;
};

const validatePhoneNumber = (phoneNumber:string) => {
    const regex = /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return regex.test(phoneNumber);
};

export {applyMask, validatePhoneNumber};