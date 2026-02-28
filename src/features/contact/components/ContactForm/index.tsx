import { useLocale, useTranslations } from "next-intl";
import styles from "./ContactForm.module.scss"
import Input from "@/shared/components/ui/Input";
import Checkbox from "@/shared/components/ui/Checkbox";
import Button from "@/shared/components/ui/Button";
import { CONTACT_FORM_CONFIG } from "@/config/contact.config";



export default function ContactForm() {
    const t = useTranslations("Pages.Contact.Form");
    const locale = useLocale();
    const { credentials, projects, message, agreement, submit } = CONTACT_FORM_CONFIG;

    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h1>{t("heading")}</h1>
                <p>{t("summary")}</p>
            </div>

            <form className={styles.contactForm}>
                <div className={styles.credentials}>
                    {credentials.map((input) => (
                        <Input
                            key={input.name}
                            type={input.type}
                            placeholder={t(input.translationKey)}
                        />
                    ))}
                </div>

                <div className={styles.interests}>
                    <h4>{t("input_interest_placeholder")}</h4>
                    <div className={styles.projects}>
                        {projects.map((project) => (
                            <Checkbox
                                key={project.id}
                                label={project.label[locale as keyof typeof project.label]}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.message}>
                    <Input.Textarea
                        name={message.name}
                        placeholder={t(message.translationKey)}
                        rows={message.rows}
                    />
                </div>

                <div className={styles.agreement}>
                    <Checkbox label={t(agreement.translationKey)} name={agreement.name} />
                </div>

                <div className={styles.submitBtnWrapper}>
                    <Button.primary type="submit">
                        {t(submit.translationKey)}
                    </Button.primary>
                </div>
            </form>
        </div>
    );
}