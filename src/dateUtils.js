// @flow
import padStart from 'string.prototype.padstart';

const monthFormat = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatDate = (date: Date): string => `${padStart(date.getDate(), 2, '0')} ${monthFormat[date.getMonth()]} ${date.getFullYear()}`;

export const formatDateAndTime = (date: Date): string => `${formatDate(date)} at ${padStart(date.getHours(), 2, '0')}:${padStart(date.getMinutes(), 2, '0')}`;