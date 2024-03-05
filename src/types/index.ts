export * from './authserver';

type UserPropertyKeys = 'prefferedLanguage';

interface SerializedUserProperties {
    name: UserPropertyKeys;
    value: string;
}

interface SerializedUser {
    id: string;
    properties?: SerializedUserProperties[];
}

export { SerializedUser };