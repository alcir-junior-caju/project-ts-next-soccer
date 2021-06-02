import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb as BreadcrumbChakra, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from 'next/link';

type BreadcrumbLink = {
  label: string;
  link: string;
};

interface Breadcrumbs {
  breadcrumbs: BreadcrumbLink[];
};

const Breadcrumb = ({ breadcrumbs }: Breadcrumbs) => {
  return (
    <BreadcrumbChakra mb={4} spacing={2} separator={<ChevronRightIcon />}>
      {breadcrumbs.map(breadcrumb => (
        <BreadcrumbItem key={breadcrumb.link}>
          <Link href={breadcrumb.link}>
            <BreadcrumbLink>
              {breadcrumb.label}
            </BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      ))}
    </BreadcrumbChakra>
  );
};

export default Breadcrumb;
