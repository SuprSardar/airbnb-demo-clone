import { lazy } from "react";

type EventListnerType = <T extends keyof HTMLElementEventMap>(
  event: T,
  fn: (e: HTMLElementEventMap[T]) => void,
  el?: Document | Element | Window,
  capture?: boolean
) => void;
type CreateElementType = <T extends keyof HTMLElementTagNameMap>(
  tag: T,
  attr?: Partial<HTMLElementTagNameMap[T]>
) => HTMLElementTagNameMap[T];

export const $ = <T extends Element>(path: string, el: Document | Element = document) => el.querySelector<T>(path);

export const $$ = <T extends Element>(path: string, el: Document | Element = document) => el.querySelectorAll<T>(path);

export const AE: EventListnerType = (event, fn, el = document, capture = false) =>
  el.addEventListener(event, fn as EventListenerOrEventListenerObject, capture);

export const RE: EventListnerType = (event, fn, el = document, capture = false) =>
  el.removeEventListener(event, fn as EventListenerOrEventListenerObject, capture);

export const CE: CreateElementType = (tag, attr = {}) => Object.assign(document.createElement(tag), attr);

export const CN = (...classes: (string | boolean)[]) => classes.filter(Boolean).join(" ");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Lazy = (module: any, delay = 350) =>
  lazy(async () => (await Promise.all([module, new Promise((resolve) => setTimeout(resolve, delay))]))[0]);

export const Wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const TimeAgo = (date: string) => {
  let duration = (+new Date(date) - +new Date()) / 1000;

  const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
    ["seconds", 60],
    ["minutes", 60],
    ["hours", 24],
    ["days", 7],
    ["weeks", 4.34524],
    ["months", 12],
    ["years", Infinity],
  ];

  for (const [unit, amount] of UNITS) {
    if (Math.abs(duration) < amount)
      return new Intl.RelativeTimeFormat("en-GB", { numeric: "auto", style: "short" }).format(Math.round(duration), unit);
    duration /= amount;
  }

  return date;
};

export const FormatDate = (date: string, options: Intl.DateTimeFormatOptions = {}) => new Date(date).toLocaleDateString("en-GB", options);
