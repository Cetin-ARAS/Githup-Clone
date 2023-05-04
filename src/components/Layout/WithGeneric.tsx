type GenericType = {
  isHeader: boolean;
  isFooter: boolean;
};

export default function withGeneric({ isHeader, isFooter }: GenericType) {
  return function getGeneric() {
    return { isHeader: isHeader, isFooter: isFooter };
  };
}
