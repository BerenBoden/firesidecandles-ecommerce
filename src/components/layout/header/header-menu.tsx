import Link from "@components/ui/link";
import { FaChevronDown } from "react-icons/fa";
import MegaMenu from "@components/ui/mega-menu";
import classNames from "classnames";
import { useQuery } from "react-query";
import { getProductCategories } from "@framework/category/get-all-categories";
import { getArticleCategories } from "@framework/category/get-all-categories";

interface MenuProps {
  className?: string;
  menu: any;
}

const HeaderMenu: React.FC<MenuProps> = ({ className, menu }) => {
  const { data: productCategories } = useQuery(["productCategories"], getProductCategories);
  const { data: articleCategories } = useQuery(["articleCategories"], getArticleCategories);

  return (
    <nav className={classNames(`headerMenu flex w-full relative`, className)}>
      {menu?.map((item: any) => (
        <div className={`menuItem group cursor-pointer py-7`} key={item.id}>
          <Link
            href={item.path}
            className="capitalize relative inline-flex items-center px-2 py-2 text-sm font-normal text-heading xl:px-4 group-hover:text-black"
          >
            {item.label}
            {item.subMenu && (
              <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </Link>
          {item.subMenu && item.path === '/articles' ? (
            <MegaMenu categories={articleCategories} />
          ) : item.subMenu && item.path === '/shop' ? (
            <MegaMenu categories={productCategories} />
          ) : null}
        </div>
      ))}
    </nav>
  );
};

export default HeaderMenu;
