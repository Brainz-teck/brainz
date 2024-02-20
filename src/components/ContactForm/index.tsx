import { Row, Col, message } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
//import { create } from "domain";
import axios from "axios";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const createTicket = (e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email: any;
    let title: any;
    let description: any;
    formData.forEach(function (value, key) {
      if (key === "email") {
        email = value;
      } else if (key === "title") {
        title = value;
      } else {
        description = value;
      }
    });
    const apiKey = "";
    const url = ``;
    const ticketData = {
      subject: title,
      description: description,
      email: email,
    };
    const options = {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(apiKey)}`,
        "Content-Type": "application/json",
        // Base64 encoding of API key
      },
      body: JSON.stringify(ticketData),
    };
    axios
      .post(url, options)
      .then((data) => {
        console.log(data);
      })
      .catch((er) => console.error(er));
  };

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        {/* <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={createTicket}>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col> */}
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
