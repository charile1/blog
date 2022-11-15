  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  // app/layout.tsx 은 pages/_app.tsx 와 pages/_document.tsx를 대체한다.
  // 기존 전역 스타일 _app, _documnet 는 루트 레이아웃에 복사한다.

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <head>
          <title>Charlie develog</title>
        </head>
        <body>
          {children}</body>
      </html>
    );
  }