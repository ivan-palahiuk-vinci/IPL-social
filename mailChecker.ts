function isValidEmail(email: string): boolean {
    if(!email.includes('@')) return false;

    const parts = email.split('@');
    if (parts.length !== 2) return false;

    const [local, domain] = parts;
    if (local.length === 0 || domain.length === 0) return false;

    
    return false;
}

export { isValidEmail };