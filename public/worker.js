export default {
  async fetch(request) {
    const html = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting...</title>
        <style>
          body {
            font-family: 'Noto Sans JP', sans-serif;
            text-align: center;
            padding: 2rem;
            background-color: #f0f0f0;
          }
        </style>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Noto+Sans+JP:wght@100..900&family=Playwrite+CU:wght@100..400&family=Train+One&display=swap" rel="stylesheet">
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const links = [
              'https://line.me/ti/g2/qaz4Plmz77kUsrwVJWHBMTXv-5Io-XfIBdCRkg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default'
            ];
            const chosenLink = links[Math.floor(Math.random() * links.length)];
            console.log("選ばれたリンク:", chosenLink);
            document.body.style.visibility = 'hidden';
            setTimeout(() => {
              document.body.style.visibility = 'visible';
              window.location.href = chosenLink;
            }, 1000);
          });
        </script>
      </head>
      <body>
        <p>HAKODATE KAKKIオープンチャットに登録いただきありがとうございます！</p>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: { 'content-type': 'text/html; charset=UTF-8' },
    });
  }
};
