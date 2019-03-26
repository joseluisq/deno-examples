export interface Math {
    factorial (n: number): number
}

export class Calculator implements Math {

    /** Calculate factorial of one number */
    factorial (n: number) {
        let i = 1
        let total = 1

        while (i <= n) {
            total *= i
            i += 1
        }

        return total
    }

}
