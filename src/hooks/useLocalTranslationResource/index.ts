import { formatText, textFormats } from '@/utils/formatText';
import { useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface translationResource {
    en: {
        [key: string]: string;
    };
    es: {
        [key: string]: string;
    };
}

interface IUseLocalTranslationResource {
    resource: translationResource;
    name: string;
}

export const useLocalTranslationResource = ({
    resource,
    name,
}: IUseLocalTranslationResource) => {
    const { t, i18n } = useTranslation();

    i18n.addResourceBundle('en', name, resource.en);
    i18n.addResourceBundle('es', name, resource.es);

    useEffect(() => {
        return () => {
            i18n.removeResourceBundle('en', name);
            i18n.removeResourceBundle('es', name);
        };
    }, []);

    // local translation function to use in the component
    const lt = useCallback((key: string, format: textFormats = 'normal') => {
        return formatText(
            t(`${key}`, {
                ns: name,
            }),
            format,
        );
    }, []);

    return {
        t,
        lt,
    };
};

export default useLocalTranslationResource;
