import { useTranslation } from "react-i18next";

export default function ThankYou() {

    const [t] = useTranslation("global");

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="h-100 text-center text-dark">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main className="px-3 h-100">
                        <p className="fs-1 fw-bolder"><span>❤️</span>{t("contact.thank-you.title")}<span>❤️</span></p>
                        <h5>{t("contact.thank-you.paragraph")}👋</h5>
                    </main>
                </div>
            </div>
        </div>
    )
}