export const determineDisplayedPages = (total: number, current: number) => {
  if (total > 15) {
    // Navigation first 5 pages
    if (current < 5) {
      const firstPages = [1, 2, 3, 4, 5];
      const lastPages = [total, total - 1, total - 2];
      return [...firstPages, ...lastPages];
    }

    // Navigation last 5 pages
    else if (current <= total && current > total - 4) {
      const firstPages = [1, 2, 3];
      const lastPages = [total, total - 1, total - 2, total - 3, total - 4];
      return [...firstPages, ...lastPages];
    }

    // Navigation above fifth page and last (total-5) pages [1, 2, 3, 4, 5 ... 36, 37, 38, 39, 40]
    else {
      const firstPages = [1, 2, 3];
      const lastPages = [total, total - 1, total - 2];
      const middlePages = [
        current - 2,
        current - 1,
        current,
        current + 1,
        current + 2,
      ];

      return [...new Set([...firstPages, ...middlePages, ...lastPages])];
    }
  } else {
    return Array.from({ length: total }, (_, index) => index);
  }
};
