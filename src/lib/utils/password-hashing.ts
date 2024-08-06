import { sha512_224 } from 'js-sha512'

class PasswordHashing {
	hash(password: string): string {
		return sha512_224(password);
	}

	compare(password: string, hash: string): boolean {
		const _hash = this.hash(password);
		return hash === _hash;
	}
}

export const passwordHashing = new PasswordHashing();
