"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import {Provider} from 'react-redux'
import { store } from "@/redux/store/store";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
      <body >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
      </Provider>
    </html>
  );
}
