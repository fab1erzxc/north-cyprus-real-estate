/**
 * Форматирует цену в читаемый вид
 * @param price - цена в числовом формате
 * @returns отформатированная строка с ценой
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Утилита для объединения CSS классов
 * @param classes - массив классов
 * @returns объединенная строка классов
 */
export const cn = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Форматирует дату в читаемый вид
 * @param dateString - дата в формате ISO 8601
 * @returns отформатированная дата
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
