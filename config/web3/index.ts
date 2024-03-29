import web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector'

export const connector = new InjectedConnector({
    supportedChainIds: [1]
});

export const getLibrary = (provider: any)=> {
    const library = new web3(provider);
    return library;
}