import React, {ChangeEvent, FC, useState} from 'react';
import {Col, Modal, Row, PageHeader, Select, Form, Button, Input, Upload} from "antd";
import { BsPaperclip } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineInfoCircle, AiFillCaretDown } from 'react-icons/ai';
import styled from "styled-components";
import {UploadChangeParam} from "antd/es/upload";
import ProductImg from './assests/images/ProductImg.png';
import {factories, designs, ModalFormStep, colors, FormDataType, DesignOptionType} from "./assests/constant";

const { Option } = Select;

const Card = styled(Row)`
    display: flex;
    flex-direction: column;
    width: 240px;
    max-width: 240px;
    margin: 5px;
    padding: 10px;
    height: 340px;
    position: relative;
    transition: 0.2s;
    & img {
        width: 100%;
    }
    & .content {
        position: absolute;
        bottom: 0;
        padding: 10px 0;
        background: white;
        & h4 {
            font-weight: bold;
        }
    }
    &:hover {
        box-shadow: 0px 1px 8px #989a9c;
        border-radius: 10px;    
    }
`;

const ColorsRow = styled(Row)`
    & span {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        margin-right: 6px;
    }
`;

const FormContainer = styled(Row)`
    padding: 0 16px 16px 24px;
    & .ant-col-12 {
        margin-right: 15px;
    }
    &.finalStep {
        & .ant-col.ant-form-item-label label {
            color: #676773;    
        }
        & .ant-form-vertical .ant-form-item-label {
            padding: 0;
        }
        & .ant-form-item-control {
            font-size: 16px;
        }
    }
    
`;


const FinalNote = styled(Row)`
    border-radius: 5px;
    background: #FFFEE5;
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid rgba(0, 1, 38, 0.1);
    & svg {
        color: #1d90ff;
        margin: 2px 6px 0 0;
        font-size: 18px;
    }
`;

const StyledOption = styled(Row)`
    & .ant-col-2 {
        padding-top:2px;
    }
    & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    & p {
        margin-bottom: 0;
        font-size: 12px;
        color: #676773;
        &:first-child {
            font-weight: 400;
            font-size: 14px;
            color: black;
        }
    }
`;

const UploadButton = styled(Button)`
    border: 1px dashed #d9d9d9;
    width: 100%;
    text-align: unset;
    margin-top: 6px;
    & svg {
        position: absolute;
        top: 7px;
        right: 10px;
    }
    &.disabled {
        border: none;
        color: black;
        padding: 10px;
        height: 44px;
        padding: 10px 40px 10px 10px;
        width: fit-content;
        & svg {
            position: absolute;
            top: 16px;
        }
    }
`;

const CardComponent : FC = () => {
    const [form] = Form.useForm();
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [isNextDisabled, setIsNextDisabled] = useState<boolean>(true);
    const [currentStep, setCurrentStep] = useState<ModalFormStep>(ModalFormStep.FactoryStep);
    const [formData, setFormData] = useState<FormDataType>({factory: "", design: "", quantity: 0, fileName: ""})

    const handleFormChange = (patch: Partial<FormDataType>) => {
        // Enable the Next step button
        setIsNextDisabled(false);
        setFormData((prevFormData: FormDataType) => {
            return {
                ...prevFormData,
                ...patch,
            }
        })
    }

    const handleNextStep = () => {
        if(currentStep === ModalFormStep.FinalStep) {
            setCurrentStep(ModalFormStep.FactoryStep);
            setModal(false);
            setFormData({
                factory: "",
                design: "",
                quantity: 0,
                fileName: "",
            });
            return;
        }
        setCurrentStep(currentStep + 1);
        //Disable the next button for all the steps except last step
        if (currentStep < ModalFormStep.ChallanStep) {
            setIsNextDisabled(true);
        }
    }
    const handlePrevStep = () => {
        if (currentStep === ModalFormStep.FactoryStep) {
            return;
        }
        setCurrentStep(currentStep - 1);
        // Previous step was already selected, so enable next step
        setIsNextDisabled(false);
    }

    const handleClose = () => {
        setFormData({
            factory: "",
            design: "",
            quantity: 0,
            fileName: "",
        });
        setIsNextDisabled(true);
        setModal(false);
    }

    return (
        <>
            <Card
                onMouseEnter={() => setIsHovered(!isHovered)}
                onMouseLeave={() => setIsHovered(!isHovered)}
                onClick={() => setModal(true)}
            >
                <img alt="product" src={ProductImg} />
                <div className="content">
                    {isHovered && (
                        <p>UTCKS-38</p>
                    )}
                    <h4>100% Cotton Navy/White Color Chambery</h4>
                    {!isHovered ? <p>8 more colors</p> : (
                        <>
                            <p>Also available in</p>
                            <ColorsRow>
                                {
                                    colors.map((color:string) => (
                                        <span style={{ background: color}}/>
                                    ))
                                }
                                +2
                            </ColorsRow>
                        </>
                        )}
                </div>
            </Card>
            <Modal
                title="Material details"
                onCancel={handleClose}
                visible={modal}
                footer={[
                    <Button key="back" onClick={handlePrevStep}>
                        Back
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleNextStep} disabled={isNextDisabled}>
                        {currentStep === ModalFormStep.FinalStep ? "Assign to Factory" : "Next"}
                    </Button>
                    ]}
            >
                <Row>
                    <Col span={8} className="image-container">
                        <img alt="productImg" src={ProductImg}/>
                    </Col>
                    <Col span={16} className="form-container">
                        <PageHeader
                            onBack={handlePrevStep}
                            title="Assign to Factory"
                        />
                        <FormContainer className={currentStep === ModalFormStep.FinalStep ? 'finalStep' : ''}>
                            {currentStep === ModalFormStep.FinalStep && (
                                <FinalNote>
                                    <AiOutlineInfoCircle/> You won't be able to change the details later
                                </FinalNote>
                            )}
                            <Form
                                form={form}
                                layout="vertical"
                            >
                                <Form.Item label="Factory" required={currentStep !== ModalFormStep.FinalStep}>
                                    {currentStep !== ModalFormStep.FinalStep ? (
                                        <Select
                                            suffixIcon={<AiFillCaretDown/>}
                                            style={{ width: '100%'}}
                                            placeholder="Select factory"
                                            onChange={(value: string) => handleFormChange({ factory: value })}
                                        >
                                            {factories.map((factory: string) => (
                                                <Option key={factory} value={factory}>{factory}</Option>
                                            ))}
                                        </Select>
                                    ) : formData.factory}
                                </Form.Item>
                                {currentStep > ModalFormStep.FactoryStep && (
                                    <Form.Item label={currentStep !== ModalFormStep.FinalStep ? "Assign for design" : "Design"} required={currentStep !== ModalFormStep.FinalStep}>
                                        {currentStep !== ModalFormStep.FinalStep ? (
                                            <Select
                                                suffixIcon={<AiFillCaretDown/>}
                                                placeholder="Search by Name or Design ID"
                                                style={{ width: '100%'}}
                                                onChange={(value: string) => handleFormChange({ design: value })}
                                            >
                                                {designs.map((design: DesignOptionType) => (
                                                    <Option key={design.code} value={design.name}>
                                                        <StyledOption>
                                                            <Col span={2}>
                                                                <img src={design.img} alt={design.name}/>
                                                            </Col>
                                                            <Col span={22}>
                                                                <p>{design.name}</p>
                                                                <p>{design.code}</p>
                                                            </Col>
                                                        </StyledOption>
                                                    </Option>
                                                ))}
                                            </Select>
                                        ) : formData.design}
                                    </Form.Item>
                                )}
                                <Row>
                                    <Col span={12}>
                                        {currentStep > ModalFormStep.DesignStep && (
                                            <Form.Item
                                                label={currentStep !== ModalFormStep.FinalStep ? "Assign quantity" : "Quantity"}
                                                required={currentStep !== ModalFormStep.FinalStep}
                                            >
                                                {currentStep !== ModalFormStep.FinalStep ? (
                                                    <Input
                                                        placeholder="Enter quantity"
                                                        type="number"
                                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                                                handleFormChange({
                                                                    quantity: isNaN(+event.target.value) ? undefined : +event.target.value
                                                                })}
                                                        value={formData.quantity ? formData.quantity : undefined}/>
                                                ) : `${formData.quantity} meter`}
                                            </Form.Item>
                                        )}
                                    </Col>
                                    <Col>
                                        {currentStep === ModalFormStep.QuantityStep && (
                                            <Form.Item label="Available Inventory">
                                                1,650 meter
                                            </Form.Item>
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        {currentStep > ModalFormStep.QuantityStep && (
                                            <Form.Item
                                                label={currentStep !== ModalFormStep.FinalStep ? "Attach Challan" : "Challan"}
                                                required={currentStep !== ModalFormStep.FinalStep}
                                            >
                                                {currentStep !== ModalFormStep.FinalStep ? (
                                                    <Upload onChange={(event: UploadChangeParam) => handleFormChange({ fileName: event.file.name })}>
                                                        <UploadButton>
                                                            {formData.fileName ? formData.fileName : "Select File"}
                                                            <BsPaperclip />
                                                        </UploadButton>
                                                    </Upload>
                                                ) : (
                                                    <UploadButton className='disabled' disabled>
                                                        {formData.fileName}
                                                        <AiOutlineEye />
                                                    </UploadButton>
                                                )}
                                            </Form.Item>
                                        )}
                                    </Col>
                                </Row>
                            </Form>
                        </FormContainer>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}

export default CardComponent;
