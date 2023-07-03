import InstaSend from 'instasend';

const instasendInstance = new InstaSend({
  merchantId: 'YOUR_MERCHANT_ID',
  secretKey: 'YOUR_SECRET_KEY',
});

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = {
    amount: items.reduce((total, item) => total + item.price, 0),
    customerPhone: email,
  };

  const session = await instasendInstance.openCheckout(transformedItems, (response) => {
    if (response.status === 'success') {
      console.log('Payment successful!');
    } else if (response.status === 'failed') {
      console.log('Payment failed!');
    }
  });

  res.status(200).json({ id: session.id });
};
