import { App, BrowserWindow, BrowserView } from 'electron';
import { PuppeteerNode, Browser, Page } from 'puppeteer-core';
/**
 * Initialize the electron app to accept puppeteer/DevTools connections.
 * Must be called at startup before the electron app is ready.
 * @param {App} app The app imported from electron.
 * @param {number} port Port to host the DevTools websocket connection.
 */
export declare const initialize: (app: App, port?: number) => Promise<void>;
/**
 * Connects puppeteer to the electron app. Must call {@link initialize} before connecting.
 * When connecting multiple times, you use the same port.
 * @param {App} app The app imported from electron.
 * @param {puppeteer} puppeteer The imported puppeteer namespace.
 * @returns {Promise<Browser>} An object containing the puppeteer browser, the port, and json received from DevTools.
 */
export declare const connect: (app: App, puppeteer: PuppeteerNode) => Promise<Browser>;
/**
 * Given a BrowserWindow, find the corresponding puppeteer Page. It is undefined if external operations
 * occur on the page whilst we are attempting to find it. A url/file must be loaded on the window for it to be found.
 * If no url is loaded, the parameter 'allowBlankNavigate' allows us to load "about:blank" first.
 * @param {Browser} browser The puppeteer browser instance obtained from calling |connect|.
 * @param {BrowserWindow} window The browser window for which we want to find the corresponding puppeteer Page.
 * @param {boolean} allowBlankNavigate If no url is loaded, allow us to load "about:blank" so that we may find the Page.
 * @returns {Promise<Page>} The page that corresponds with the BrowserWindow.
 */
export declare const getPage: (browser: Browser, window: BrowserWindow | BrowserView, allowBlankNavigate?: boolean) => Promise<Page>;
declare const _default: {
    connect: (app: Electron.App, puppeteer: PuppeteerNode) => Promise<Browser>;
    getPage: (browser: Browser, window: BrowserView | BrowserWindow, allowBlankNavigate?: boolean) => Promise<Page>;
    initialize: (app: Electron.App, port?: number) => Promise<void>;
};
export default _default;
