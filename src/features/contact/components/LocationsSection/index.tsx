import { useTranslations, useLocale } from "next-intl";
import LocationCard from "./LocationCard";
import styles from "./LocationsSection.module.scss";
import { LocationsSectionProps } from "../../types";
import { Languages } from "@/config/languages.config";


export default function LocationsSection(props: LocationsSectionProps) {
    const locale = useLocale() as Languages;
    const t = useTranslations("Pages.Contact");


    const title =
        props.type === "showroom"
            ? t("Showrooms.heading")
            : t("Offices.heading");

    /* const description =
        props.type === "showroom"
            ? t("Showrooms.summary")
            : t("Offices.summary"); */




    return (
        <div className={styles.container}>
            {(title) && (
                <div className={styles.description}>
                    {title && <h1>{title}</h1>}
                    {/* {description && <p>{description}</p>} */}
                </div>
            )}

            <div className={styles.grid}>
                {props.type === "showroom" &&
                    props.items.map((item, index) => (
                        <LocationCard.showroom
                            key={index}
                            index={index}
                            title={item.title[locale]}
                            location={item.location}
                            mapRef={props.mapRef}
                        />
                    ))}

                {props.type === "office" &&
                    props.items.map((item, index) => (
                        <LocationCard.office
                            key={index}
                            index={index}
                            title={item.title[locale]}
                            address={item.address[locale]}
                            phone={item.phone}
                            location={item.location}
                            mapRef={props.mapRef}

                        />
                    ))}
            </div>
        </div>
    );
}
