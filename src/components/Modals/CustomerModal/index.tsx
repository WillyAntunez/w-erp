import { CustomModal } from '@/components/CustomModal';
import translations from './CustomerModal.t.json';
import { Divider, Grid, Step, StepLabel, Stepper } from '@mui/material';
import { useEffect, useState } from 'react';
import useLocalTranslationResource from '@/hooks/useLocalTranslationResource';
import { H2, Paragraph } from '@/components/Typography';
import CustomerFormStepInfo from './components/steps/CustomerFormStepInfo';
import { CustomerFormStepTwo } from './components/steps/CustomerFormStepTwo';
import { CustomerFormStepAdditionalContacts } from './components/steps/CustomerFormStepAdditionalContacts';
import { CustomerFormStepDocuments } from './components/steps/CustomerFormStepDocuments';
import { CustomerBasicInfo } from './types/CustomerModal';

import { initialCustomerBasicInformation } from './newCustomerInitialStates';

interface ICustomerModalProps {
    open: boolean;
    onClose: () => void;
    currentCustomerId?: number | null;
}

export const CustomerModal = ({
    open,
    onClose,
    currentCustomerId,
}: ICustomerModalProps) => {
    // translations

    const { t, lt } = useLocalTranslationResource({
        resource: translations,
        name: 'CustomerModal',
    });

    // * handle data
    const [customerBasicInfo, setCustomerBasicInfo] =
        useState<CustomerBasicInfo>({ ...initialCustomerBasicInformation });

    const onChangeCustomerBasicInfo = (data: CustomerBasicInfo): void => {
        setCustomerBasicInfo({ ...data });
        console.log(data);
    };

    // * handle steps
    const [currentStep, setCurrentStep] = useState(0);

    const isLastStep = currentStep === 3;
    const isFirstStep = currentStep === 0;

    const onNextClick = () => {
        if (!isLastStep) {
            setCurrentStep(currentStep + 1);
        }
    };

    const onPreviousClick = () => {
        if (!isFirstStep) {
            setCurrentStep(currentStep - 1);
        }
    };

    // * reset/initialize
    useEffect(() => {
        if (!open) {
            setCurrentStep(0);
            setCustomerBasicInfo({ ...initialCustomerBasicInformation });
        }
    }, [open]);

    return (
        <CustomModal
            title={
                !currentCustomerId
                    ? lt('create-customer')
                    : lt('update-customer')
            }
            open={open}
            maxWidth={900}
            showActionButtons
            onClose={onClose}
            onConfirm={onNextClick}
            onCancel={onPreviousClick}
            confirmButtonText={
                !isLastStep
                    ? lt('next-step-button')
                    : lt('save-customer-button')
            }
            cancelButtonText={
                !isFirstStep ? lt('previous-step-button') : lt('cancel-button')
            }
        >
            <Grid item xs={12} my={2}>
                <Stepper alternativeLabel activeStep={currentStep}>
                    <Step>
                        <StepLabel>
                            {lt('customer-basic-information')}
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>{lt('contact-info')}</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>{lt('additional-contacts')}</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>{lt('documents')}</StepLabel>
                    </Step>
                </Stepper>
            </Grid>

            <Grid item xs={12} mb={2}>
                <Divider />
            </Grid>

            {currentStep === 0 && (
                <CustomerFormStepInfo
                    current={customerBasicInfo}
                    onChange={onChangeCustomerBasicInfo}
                />
            )}

            {currentStep === 1 && <CustomerFormStepTwo />}

            {currentStep === 2 && <CustomerFormStepAdditionalContacts />}

            {currentStep === 3 && <CustomerFormStepDocuments />}
        </CustomModal>
    );
};
