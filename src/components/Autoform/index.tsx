import { Grid } from '@mui/material';
import {
    IAutoformProps,
    IInputDef,
    IInputOption,
    IInputTypeDef,
} from './types/AutoformTypes';
import { inputsCollection } from './inputsCollection';
import { useTranslation } from 'react-i18next';

export const Autoform = <T,>({
    inputs = [],
    control,
    defaultSizes = { xs: 12, sm: 6, md: 4 },
    spacing = 1,
    optionsData = {},
}: IAutoformProps) => {
    const { i18n } = useTranslation();

    return (
        <Grid container spacing={spacing}>
            {inputs.map((input: IInputDef<T>, index) => {
                const inputConf: IInputTypeDef | undefined =
                    inputsCollection.find(
                        (currentInput) => currentInput.name === input.type,
                    );

                if (!inputConf) {
                    console.error(
                        `Input type ${input.type} not found in inputsCollection.ts file`,
                    );
                    return null;
                }

                const sizes =
                    input?.sizes || inputConf?.defaults?.sizes || defaultSizes;

                let options: IInputOption[] = [];

                if (input.type !== 'DIVIDER') {
                    options = optionsData[input.name as string];
                }

                const label: string | undefined =
                    typeof input.label === 'string'
                        ? input.label
                        : input.label?.[i18n.language as 'es' | 'en'];

                return (
                    <Grid item {...sizes} key={index}>
                        <inputConf.Component
                            key={index}
                            control={control}
                            options={options}
                            {...inputConf.defaults}
                            {...input}
                            label={label}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Autoform;
