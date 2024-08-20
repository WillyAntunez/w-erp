import { Button, ButtonGroup, Divider, Grid, Typography } from '@mui/material';
import { CustomerBasicInfo } from '../../../types/CustomerModal';
import { genders, languages, personTypesNames } from '@/utils/constants';
import { H2, Paragraph } from '@/components/Typography';
import { IPersonType } from '@/types/common';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Autoform from '@/components/Autoform';
import AvatarEditable from '@/components/AvatarEditable';

import {
    legalEntityAdditionalInfoInputs,
    legalEntityProfileAsideInputs,
    naturalPersonAdditionalInfoInputs,
    naturalPersonProfileAsideInputs,
} from './formSchemas';
import { segmentationInputs } from './formSchemas';
import useAutoformValidation from '@/hooks/useAutoFormValidation';

interface ICustomerFormStepOneProps {
    current: CustomerBasicInfo;
    onChange: (data: CustomerBasicInfo) => void;
}

export const CustomerFormStepInfo = ({
    current,
    onChange,
}: ICustomerFormStepOneProps) => {
    // * forms
    const { resolver } = useAutoformValidation<CustomerBasicInfo>([
        ...naturalPersonProfileAsideInputs,
    ]);

    const { control, reset, watch, getValues, handleSubmit } =
        useForm<CustomerBasicInfo>({
            resolver,
            mode: 'onChange',
        });

    useEffect(() => {
        const subscription = watch((value, { name, type }) =>
            onChange(value as CustomerBasicInfo),
        );
        return () => subscription.unsubscribe();
    }, [watch]);

    // * handle person type change
    const [personType, setPersonType] = useState<IPersonType>('N');

    const onChangePersonType = (type: IPersonType) => {
        setPersonType(type);
    };

    // * handle avatar image change
    const [avatarImage, setAvatarImage] = useState<File | null>(null);

    const onAvatarImageChange = (image: File) => {
        setAvatarImage(image);
    };

    const onRemoveAvatarImage = () => {
        setAvatarImage(null);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <H2 variant="h6">Datos generales</H2>
                <Paragraph>
                    Por favor, proporcione la información básica sobre el
                    cliente.
                </Paragraph>
            </Grid>

            <Grid item xs={12}>
                <Divider>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.grey[700],
                        }}
                    >
                        Tipo de cliente
                    </Typography>
                </Divider>
            </Grid>

            {/* customer type select */}
            <Grid item xs={12}>
                <ButtonGroup fullWidth>
                    <Button
                        variant={
                            personType === personTypesNames.natural
                                ? 'contained'
                                : 'outlined'
                        }
                        onClick={() => onChangePersonType('N')}
                        size="small"
                    >
                        Persona natural
                    </Button>

                    <Button
                        variant={
                            personType === personTypesNames.legal
                                ? 'contained'
                                : 'outlined'
                        }
                        onClick={() => onChangePersonType('L')}
                        size="small"
                    >
                        Persona jurídica
                    </Button>
                </ButtonGroup>
            </Grid>

            {/* contact info */}
            <Grid item xs={12}>
                <Divider>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.grey[700],
                        }}
                    >
                        General info
                    </Typography>
                </Divider>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {/* profile image */}

                    <Grid item>
                        <AvatarEditable
                            image={avatarImage}
                            onImageChange={onAvatarImageChange}
                            onImageRemove={onRemoveAvatarImage}
                        />
                    </Grid>

                    {/* profile aside inputs information */}
                    <Grid item flex={1}>
                        <Autoform
                            inputs={
                                personType === personTypesNames.legal
                                    ? legalEntityProfileAsideInputs
                                    : naturalPersonProfileAsideInputs
                            }
                            control={control}
                            optionsData={{
                                gender: [...Object.values(genders)],
                                preferredLanguage: [
                                    ...Object.values(languages),
                                ],
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                {personType === personTypesNames.natural ? (
                    <Autoform
                        inputs={naturalPersonAdditionalInfoInputs}
                        control={control}
                    />
                ) : (
                    <Autoform
                        inputs={legalEntityAdditionalInfoInputs}
                        control={control}
                    />
                )}
            </Grid>

            {/* contact form */}
            <Grid item xs={12}>
                <Autoform inputs={segmentationInputs} control={control} />
            </Grid>
        </Grid>
    );
};

export default CustomerFormStepInfo;
