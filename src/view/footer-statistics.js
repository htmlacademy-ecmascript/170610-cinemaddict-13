import AbstractView from "./abstract";

const createFooterStatisticsTemplate = (count) => {
  return `<p>${count} movies inside</p>`;
};

export default class FooterStatisticsView extends AbstractView {
  getTemplate() {
    return createFooterStatisticsTemplate();
  }
}
