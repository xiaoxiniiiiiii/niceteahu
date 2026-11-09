# Nice Tea Hub — sandbox preview

This is a preview, not a live store. The 40 catalogue entries and prices are illustrative; actual inventory, rights, prices, policies, and company registration must be confirmed. Product images are placeholders. Do not use for real orders.

## Run locally

Requires Node.js 20.19+ or 22.12+.

1. Copy `.env.example` to `.env` and enter the PayPal **sandbox** app client ID and secret locally. Never share the secret in chat, commit it, or use a `VITE_` prefix.
2. In one terminal run `npm run server`.
3. In another terminal run `npm run dev` and open the local address Vite prints.
4. Use PayPal sandbox buyer credentials to test checkout. This implementation is hard-coded to the sandbox endpoint and refuses to operate without server credentials.

The server uses in-memory order state for demonstration only; restarting it loses pending orders. It does not persist orders, calculate shipping/tax, or process webhooks. It is not suitable for production. Complete production work, security review, reliable storage and webhook verification before real payments. One-click merchant onboarding is not implemented; PayPal partner eligibility and onboarding integration are required. Admin login is not yet implemented. No live switch exists.

The hero is AI-generated for illustrative use; it does not establish actual product specifications or rights clearance. Catalogue entries are placeholders, not representations of actual stock.

## Local admin preview

Run `node setup-admin.js` once from the project directory. The randomly generated password is displayed once; save it securely. Start the server and visit `http://127.0.0.1:5173/admin`. The login and its in-memory session are intended for this local sandbox only. Do not expose the server publicly; product management, persistent orders, secure production deployment and PayPal partner onboarding are not implemented.

## Current local features and limits

The admin dashboard can edit sample names, prices, and visibility. Changes are saved locally under ignored `data/catalog.json`; PayPal sandbox order attempts are saved under ignored `data/orders.json`. Back up these local files separately if needed. The storefront refreshes product data from the server. The server remains bound to localhost and the payment endpoint remains sandbox-only. Orders and product data use local JSON, not a production database; pending or uncertain capture states need manual reconciliation in PayPal. No webhook processing, shipping/tax calculation, secure public deployment, account binding, refund handling, or production access is implemented. Do not expose this app to the internet or use it for sales.

## Connect PayPal sandbox from local admin

In `/admin`, open the PayPal sandbox section, follow the Developer Dashboard link, select or create an app under Sandbox, and enter that app's Client ID and Client Secret. The local server verifies them against PayPal sandbox before saving them in `data/paypal-sandbox.json` (ignored by Git), and never returns the secret to the browser. Restrict access to the Windows account and computer holding this file; filesystem permissions on Windows depend on inherited ACLs. The saved credentials take precedence over `.env` on restart. Remove this local file to remove the saved connection (restart the server afterwards); `.env` credentials, if present, still apply. A successful connection verifies credentials only, not payment or account eligibility. Use a sandbox buyer and complete a test checkout to verify the payment flow. Do not use live credentials here. One-click merchant onboarding requires PayPal partner approval and is not implemented.
