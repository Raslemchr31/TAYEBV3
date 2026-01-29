// Webhook Service for Order Management
const WEBHOOK_URL = 'https://raslem-n8n.duckdns.org/webhook/6569787d-7c6d-4dc2-a651-cd63c9c6b902';

interface OrderData {
  name: string;
  phone: string;
  product: string;
  state: string;
  commune: string;
  shipments: string;
  total: number;
}

export async function submitOrderToAirtable(orderData: OrderData): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook Error:', response.status, errorText);
      return { 
        success: false, 
        error: `Failed to submit order: ${response.status}` 
      };
    }

    const data = await response.json();
    console.log('Order submitted successfully to webhook:', data);
    return { success: true };

  } catch (error) {
    console.error('Error submitting order to webhook:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Network error. Please check your connection.' 
    };
  }
}
