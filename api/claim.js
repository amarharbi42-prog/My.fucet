export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ success: false, message: 'يرجى إدخال عنوان المحفظة أو إيميل FaucetPay' });
  }

  const API_KEY = "26e93b44485453e5360831aa911b85d495ef1d11dc32d121211df585a8cf1e8e";
  const AMOUNT = 30;
  const CURRENCY = "USDT";

  try {
    const params = new URLSearchParams();
    params.append('api_key', API_KEY);
    params.append('amount', AMOUNT);
    params.append('to', address.trim());
    params.append('currency', CURRENCY);

    const response = await fetch('https://faucetpay.io/api/v1/send', {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await response.json();

    if (data.status === 200) {
      return res.status(200).json({
        success: true,
        message: `تم إرسال ${AMOUNT} ساتوشي بنجاح إلى حسابك في FaucetPay!`,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: data.message || 'حدث خطأ أثناء معالجة الدفع',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'تعذر الاتصال بسيرفر FaucetPay حالياً',
    });
  }
}
