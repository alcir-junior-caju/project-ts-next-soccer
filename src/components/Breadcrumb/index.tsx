import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb as BreadcrumbChakra, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

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
          <BreadcrumbLink href={breadcrumb.link}>
            {breadcrumb.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </BreadcrumbChakra>
  );
};

export default Breadcrumb;
