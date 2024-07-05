import type { RouteLocationAsRelativeGeneric } from "vue-router";

export default interface BreadCrumbsProps {
  text: string;
  href?: RouteLocationAsRelativeGeneric
}