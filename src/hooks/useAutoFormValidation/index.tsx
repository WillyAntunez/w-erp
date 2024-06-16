import { IInputDef } from '@/components/Autoform/types/AutoformTypes';
import { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { Resolver, FieldValues } from 'react-hook-form';

export const useAutoformValidation = <T extends FieldValues>(
    inputs: IInputDef<T>[] = [],
) => {
    const yupSchema = useMemo(() => {
        const schema: yup.ObjectShape = {};

        inputs.forEach((current: IInputDef<T>) => {
            if (current.type === 'DIVIDER') return;

            if (current.yupValidation) {
                const name = current.name as string;
                schema[name] = current.yupValidation;
            }
        });

        return { ...schema };
    }, [inputs]);

    const resolver: Resolver<T, any> = yupResolver(
        yup.object(yupSchema),
    ) as unknown as Resolver<T, any>;

    return { yupSchema, resolver };
};

export default useAutoformValidation;
