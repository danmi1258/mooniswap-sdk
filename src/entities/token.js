import { ChainId, ZERO_ADDRESS } from '../constants';
import { isETH, validateAndParseAddress } from '../utils';
/**
 * Represents an ERC20 token and Ether with a unique address and some metadata.
 */
export class Token {
    constructor(chainId, address, decimals, symbol, name) {
        this.chainId = chainId;
        this.address = validateAndParseAddress(address);
        this.isEther = isETH(address);
        this.decimals = decimals;
        this.symbol = symbol;
        this.name = name;
    }
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other) {
        // short circuit on reference equality
        if (this === other) {
            return true;
        }
        return this.chainId === other.chainId && this.address === other.address;
    }
}
/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA, currencyB) {
    return currencyA.address.toLowerCase() === currencyB.address.toLowerCase();
}
export const ETHER = new Token(ChainId.MAINNET, ZERO_ADDRESS, 18, 'ETH', 'Ethereum');
//# sourceMappingURL=token.js.map