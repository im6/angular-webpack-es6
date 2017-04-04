import footerTemplate from './footerTemplate.jade';
const footerDirective = ['$rootScope', ($rootScope) => {
  return {
    restrict: "AE",
    template: footerTemplate
  };
}];

export default footerDirective;