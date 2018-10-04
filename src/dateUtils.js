// @flow
const monthFormat = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatDate = (date: Date): string => `${date.getDate()} ${monthFormat[date.getMonth()]} ${date.getFullYear()}`;

export const formatDateAndTime = (date: Date): string => `${formatDate(date)} at ${date.getHours()}:${date.getMinutes()}`;