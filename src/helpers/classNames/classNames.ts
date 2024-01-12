/**
 * An object representing modifiers for the classNames function, where keys are class names and values determine inclusion.
 */
export type Mods = Record<string, boolean | string | undefined>;

/**
 * Generates a string of HTML class names based on the provided parameters.
 *
 * @param {string} cls - The base class name.
 * @param {Array<string | undefined>} [additional=[]] - Additional class names to be included.
 * @param {Mods} [mods] - A collection of modifiers, where keys are class names and values determine inclusion.
 *
 * @example
 * const basicClass = classNames('base'); // 'base'
 *
 * @example
 * const additionalClasses = classNames('base', ['extra1', 'extra2']); // 'base extra1 extra2'
 *
 * @example
 * const classWithMods = classNames('base', ['extra'], { active: true, disabled: false }); // 'base extra active'
 *
 * @returns {string} - A space-separated string of class names.
 */
export function classNames(
	cls: string,
	additional: Array<string | undefined> = [],
	mods?: Mods,
): string {
	const classList = [cls, ...additional.filter(Boolean)];

	if (mods) {
		/**
		 * Filter and map the provided modifiers to include in the class list.
		 * @type {Array<string>}
		 */
		const classes: Array<string> = Object.entries(mods)
			.filter(([, value]) => Boolean(value))
			.map(([className]) => className);

		classList.push(...classes);
	}

	return classList.join(' ');
}
