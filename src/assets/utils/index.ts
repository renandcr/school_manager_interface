export const topScreen = () => {
  return window.scrollTo(0, 0);
};

export const current_date_DD_MM_YYYY = `${new Date().getDate()}/${
  new Date().getMonth() + 1
}/${new Date().getFullYear()}`;

export const current_date_YYYY_MM_DD = `${new Date().getFullYear()}/${
  new Date().getMonth() + 1
}/${new Date().getDate()}`;
