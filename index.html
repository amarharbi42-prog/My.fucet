<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مكافآت الكريبتو المجانية | Crypto Faucet</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { background-color: #0f172a; color: #f8fafc; text-align: center; padding: 15px; }
        
        .container { max-width: 650px; margin: 0 auto; }
        
        /* كروت الإعلانات */
        .ad-banner {
            background: #1e293b;
            border: 2px dashed #334155;
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
            min-height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #94a3b8;
            font-size: 14px;
        }

        /* صندوق المطالبة الرئيسي */
        .faucet-box {
            background: #1e293b;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
            border: 1px solid #334155;
            margin: 20px 0;
        }

        h1 { font-size: 24px; color: #38bdf8; margin-bottom: 10px; }
        p.subtitle { color: #94a3b8; margin-bottom: 20px; font-size: 14px; }

        .input-group { margin-bottom: 15px; text-align: right; }
        label { display: block; margin-bottom: 6px; font-size: 13px; color: #cbd5e1; }
        input[type="text"] {
            width: 100%;
            padding: 12px 15px;
            border-radius: 8px;
            border: 1px solid #475569;
            background: #0f172a;
            color: #fff;
            font-size: 15px;
            outline: none;
        }
        input[type="text"]:focus { border-color: #38bdf8; }

        .btn-claim {
            width: 100%;
            background: #0284c7;
            color: white;
            border: none;
            padding: 14px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.2s;
        }
        .btn-claim:hover { background: #0369a1; }
        .btn-claim:disabled { background: #475569; cursor: not-allowed; }

        /* رسائل النتيجة */
        #status-msg { margin-top: 15px; font-size: 14px; font-weight: bold; }
        .success { color: #4ade80; }
        .error { color: #f87171; }
    </style>
</head>
<body>

    <div class="container">
        
        <!-- مساحة إعلانية علوية (Leaderboard 728x90) -->
        <div class="ad-banner" id="ad-top">
            [ مساحة إعلان علوي - 728x90 ]
        </div>

        <!-- صندوق الفاوست -->
        <div class="faucet-box">
            <h1>احصل على عملات رقمية مجاناً</h1>
            <p class="subtitle">المكافأة تُرسل مباشرة وفورياً إلى محفظة FaucetPay الخاصة بك</p>

            <form id="claim-form">
                <div class="input-group">
                    <label for="address">إيميل أو عنوان محفظة FaucetPay:</label>
                    <input type="text" id="address" placeholder="مثال: name@gmail.com أو عنوان TRX" required>
                </div>

                <button type="submit" id="submit-btn" class="btn-claim">مطالبة الآن (Claim)</button>
            </form>

            <div id="status-msg"></div>
        </div>

        <!-- مساحة إعلانية سفلية مربعة أو بانر -->
        <div class="ad-banner" id="ad-bottom">
            [ مساحة إعلان سفلي - 300x250 أو بانر ]
        </div>

    </div>

    <script>
        const form = document.getElementById('claim-form');
        const submitBtn = document.getElementById('submit-btn');
        const statusMsg = document.getElementById('status-msg');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const address = document.getElementById('address').value.trim();

            if (!address) return;

            submitBtn.disabled = true;
            submitBtn.innerText = "جاري الإرسال والتحقق...";
            statusMsg.innerHTML = "";

            try {
                // إرسال الطلب للسيرفر الداخلي (الباك إند)
                const res = await fetch('/api/claim', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ address: address })
                });

                const data = await res.json();

                if (data.status === 200 || data.success) {
                    statusMsg.className = "success";
                    statusMsg.innerHTML = `تم إرسال الرصيد بنجاح إلى محفظتك!`;
                    // مؤقت بسيط يمنع التكرار المباشر
                    let timer = 60;
                    const interval = setInterval(() => {
                        submitBtn.innerText = `انتظر (${timer}) ثانية`;
                        timer--;
                        if (timer < 0) {
                            clearInterval(interval);
                            submitBtn.disabled = false;
                            submitBtn.innerText = "مطالبة الآن (Claim)";
                        }
                    }, 1000);
                } else {
                    statusMsg.className = "error";
                    statusMsg.innerHTML = data.message || "حدث خطأ أثناء معالجة الطلب.";
                    submitBtn.disabled = false;
                    submitBtn.innerText = "مطالبة الآن (Claim)";
                }
            } catch (err) {
                statusMsg.className = "error";
                statusMsg.innerHTML = "تعذر الاتصال بالخادم، جرب مرة أخرى.";
                submitBtn.disabled = false;
                submitBtn.innerText = "مطالبة الآن (Claim)";
            }
        });
    </script>
</body>
</html>
