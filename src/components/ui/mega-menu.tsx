import React from "react";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";
import { Categories } from "@framework/types";

const MegaMenu: React.FC<{ categories: Categories[] }> = ({ categories }) => {
  const { t } = useTranslation("menu");

  return (
    <div className="absolute bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
      <div className="grid grid-cols-5">
        {categories?.map(({ id, attributes }) => (
          <React.Fragment key={id}>
            <div className="py-2">
              <Link
                href={attributes.slug}
                className="block text-xs py-1.5 text-heading px-5 xl:px-8 hover:text-heading hover:bg-gray-300"
              >
                <div>
                  <p className="font-semibold capitalize">{t(attributes.name)}</p>
                  <p>{attributes.meta_description}</p>
                </div>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
