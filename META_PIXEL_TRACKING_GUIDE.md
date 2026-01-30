# Meta Pixel Tracking Guide - Mr.Tayeb∞

**Pixel ID:** 1428342818806779
**Status:** ✅ Connected and Active
**Updated:** January 30, 2026

---

## 📊 What's Being Tracked

Your website now tracks **3 key events** that help you understand customer behavior and optimize your Facebook/Instagram ads:

### 1. **PageView** (Automatic)
- **When:** Every time someone visits your website
- **Location:** `index.html` (line 15)
- **Purpose:** Track total website visitors
- **Data Collected:**
  - Page URL
  - Referrer source
  - Device type
  - Browser info

### 2. **ViewContent** (Product Interest)
- **When:** Someone opens a product detail modal
- **Location:** `src/sections/Products.tsx` (line 92)
- **Purpose:** Track which products people are interested in
- **Data Collected:**
  - Product ID
  - Product name
  - Product price
  - Content type: "product"
  - Currency: DZD

**Example:**
```javascript
fbq('track', 'ViewContent', {
  content_ids: ['table-home'],
  content_type: 'product',
  currency: 'DZD',
  value: 15000
});
```

### 3. **Contact** (Engagement)
- **When:** Someone clicks any WhatsApp or contact button
- **Locations:**
  - Navigation bar "Get Quote" button
  - Hero section WhatsApp button
  - Contact section buttons (3 places)
  - Footer social links
- **Purpose:** Track customer engagement and intent to purchase
- **Files with Contact tracking:**
  - `src/sections/Hero.tsx` (line 137)
  - `src/sections/Contact.tsx` (lines 94, 177, 195)
  - `src/sections/Footer.tsx` (line 60)
  - `src/sections/Navigation.tsx` (line 81)

---

## 🎯 Event Locations Map

| Event | Location | Action | File |
|-------|----------|--------|------|
| PageView | Automatic | Page loads | `index.html` |
| ViewContent | Product modal | User clicks product card | `Products.tsx:92` |
| Contact | Hero CTA | "اطلب الآن عبر الواتساب" button | `Hero.tsx:137` |
| Contact | Navigation | "احصل على عرض" button | `Navigation.tsx:81` |
| Contact | Contact section | WhatsApp card click | `Contact.tsx:94` |
| Contact | Contact section | Quick contact button | `Contact.tsx:195` |
| Contact | Contact section | Social WhatsApp button | `Contact.tsx:177` |
| Contact | Footer | WhatsApp social icon | `Footer.tsx:60` |

---

## 🧪 How to Test Your Pixel

### Method 1: Meta Pixel Helper (Chrome Extension)

1. **Install Extension:**
   - Go to: https://chrome.google.com/webstore
   - Search for "Meta Pixel Helper"
   - Install the extension

2. **Test Your Site:**
   - Visit https://www.mr-tayeb.com
   - Click the Pixel Helper icon in Chrome toolbar
   - You should see:
     - ✅ "1 Pixel found"
     - ✅ Pixel ID: 1428342818806779
     - ✅ "PageView" event fired

3. **Test Product Tracking:**
   - Click on any product card
   - Pixel Helper should show:
     - ✅ "ViewContent" event fired
     - ✅ Product details captured

4. **Test Contact Tracking:**
   - Click any WhatsApp button
   - Pixel Helper should show:
     - ✅ "Contact" event fired

### Method 2: Facebook Events Manager

1. **Go to Events Manager:**
   - Visit: https://business.facebook.com/events_manager2
   - Select your Pixel ID: 1428342818806779

2. **Check "Test Events" tab:**
   - You should see real-time events as they happen
   - Visit your website in another tab
   - Events should appear within seconds

3. **Verify Events:**
   - Look for "PageView" when page loads
   - Look for "ViewContent" when clicking products
   - Look for "Contact" when clicking WhatsApp buttons

### Method 3: Browser Console

1. **Open Developer Tools:**
   - Press F12 in Chrome
   - Go to "Console" tab

2. **Check for Pixel:**
   - Type: `fbq`
   - Press Enter
   - You should see: `ƒ fbq()` (means it's loaded)

3. **Check Events:**
   - Type: `fbq('track', 'Test')`
   - Press Enter
   - Check Network tab for Facebook request

---

## 📈 What You'll See in Facebook

### Events Manager Dashboard

After deployment, you'll see:

1. **Overview Tab:**
   - Total events received
   - Active pixel status
   - Event breakdown by type

2. **Test Events Tab:**
   - Real-time event stream
   - Event parameters
   - Browser/device info

3. **Data Sources Tab:**
   - Website traffic
   - Top events
   - Event quality score

### Ads Manager Benefits

Once the pixel is active with traffic:

1. **Create Custom Audiences:**
   - People who viewed specific products
   - People who clicked contact buttons
   - Visitors in last 30/60/90 days

2. **Set Up Conversions:**
   - Optimize ads for "Contact" events
   - Track cost per contact
   - Measure ROAS (Return on Ad Spend)

3. **Retargeting Campaigns:**
   - Show ads to product viewers
   - Exclude people who already contacted you
   - Upsell to previous customers

---

## 🚀 Recommended Custom Conversions

Set these up in Events Manager for better ad optimization:

### 1. Product Interest
- **Name:** Product View - Home Table
- **Rule:** ViewContent AND content_ids contains "table-home"
- **Use for:** Targeting people interested in basic tables

### 2. Product Interest - Premium
- **Name:** Product View - Plus/Large Tables
- **Rule:** ViewContent AND (content_ids contains "table-plus" OR "table-large")
- **Use for:** Targeting people interested in premium products

### 3. High Intent
- **Name:** Contact Clicked
- **Rule:** Contact event
- **Use for:** Conversion optimization

### 4. Product Engagement
- **Name:** Engaged Shoppers
- **Rule:** ViewContent OR Contact
- **Use for:** Warm audience retargeting

---

## 🎨 Advanced Tracking (Future Enhancements)

Consider adding these events later:

### AddToCart (if you add cart functionality)
```javascript
fbq('track', 'AddToCart', {
  content_ids: ['table-home'],
  content_type: 'product',
  value: 15000,
  currency: 'DZD'
});
```

### InitiateCheckout (when order form opens)
```javascript
fbq('track', 'InitiateCheckout', {
  content_ids: ['table-home'],
  value: 15000,
  currency: 'DZD'
});
```

### Lead (when form is submitted)
```javascript
fbq('track', 'Lead', {
  content_name: 'Order Form',
  value: totalPrice,
  currency: 'DZD'
});
```

### Purchase (if payment integration added)
```javascript
fbq('track', 'Purchase', {
  content_ids: ['table-home'],
  content_type: 'product',
  value: totalPrice,
  currency: 'DZD'
});
```

---

## 🔍 Troubleshooting

### Pixel Not Showing in Helper?

1. **Clear browser cache**
2. **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. **Check console for errors:** F12 → Console tab
4. **Verify deployment:** Make sure changes are deployed to Vercel

### Events Not Firing?

1. **Check browser console for errors**
2. **Verify fbq is defined:** Type `fbq` in console
3. **Check Network tab:** Look for Facebook requests
4. **Ad blockers:** Disable ad blockers when testing

### Events Showing in Test but not Overview?

- **Normal delay:** Overview can take 15-30 minutes to update
- **Use Test Events tab** for real-time monitoring

---

## 📊 Current Pixel Configuration

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1428342818806779');
fbq('track', 'PageView');
</script>
<!-- End Meta Pixel Code -->
```

**Key Points:**
- ✅ Pixel loads asynchronously (doesn't block page load)
- ✅ Placed in `<head>` for early loading
- ✅ NoScript fallback included for non-JS browsers
- ✅ TypeScript declarations in place (`src/types/facebook.d.ts`)

---

## 📝 Event Summary

| Event Type | Total Instances | Purpose |
|------------|----------------|---------|
| PageView | 1 (auto) | Track all visitors |
| ViewContent | 1 | Track product interest |
| Contact | 6 | Track engagement |

**Total tracking points:** 8 events across your website

---

## 🔐 Privacy & Compliance

Your pixel implementation includes:
- ✅ Standard Meta Pixel code (no modifications)
- ✅ Automatic advanced matching disabled (can be enabled)
- ⚠️ **Recommended:** Add privacy policy page
- ⚠️ **Recommended:** Add cookie consent banner (GDPR)

### Add Privacy Policy
Consider adding a privacy policy that mentions:
- Use of Meta Pixel for analytics
- Cookie usage for tracking
- How data is used (ad optimization)
- User rights (opt-out options)

---

## 🎯 Success Metrics to Monitor

Track these in Events Manager:

1. **Daily PageViews:** Measure total traffic
2. **ViewContent rate:** % of visitors viewing products
3. **Contact rate:** % of visitors clicking WhatsApp
4. **Product popularity:** Which products get most views
5. **Event source:** Desktop vs Mobile traffic

### Good Benchmarks
- **ViewContent rate:** 20-40% of PageViews
- **Contact rate:** 5-15% of PageViews
- **ViewContent → Contact:** 10-30% conversion

---

## 🚀 Next Steps After Deployment

1. **Deploy to Vercel:**
   ```bash
   git add .
   git commit -m "Update Meta Pixel ID"
   git push origin main
   ```

2. **Wait 2-3 minutes** for Vercel deployment

3. **Test with Pixel Helper:**
   - Visit https://www.mr-tayeb.com
   - Verify pixel fires

4. **Monitor Events Manager:**
   - Check Test Events tab
   - Verify events appear

5. **Create Custom Audiences:**
   - Website visitors (last 30 days)
   - Product viewers
   - People who clicked contact

6. **Set up Conversions API (optional):**
   - For more accurate tracking
   - Bypasses ad blockers
   - Server-side tracking

---

## 📞 Support

If you need help with:
- **Pixel issues:** Check Facebook Business Help Center
- **Code issues:** Review this guide
- **Ad campaigns:** Facebook Ads Support

---

## ✅ Integration Checklist

- [x] Meta Pixel code added to `<head>`
- [x] NoScript fallback added to `<body>`
- [x] Pixel ID updated to: 1428342818806779
- [x] PageView event tracking (automatic)
- [x] ViewContent event tracking (product views)
- [x] Contact event tracking (6 locations)
- [x] TypeScript declarations configured
- [ ] Deploy to production (Vercel)
- [ ] Test with Meta Pixel Helper
- [ ] Verify in Events Manager
- [ ] Create custom audiences
- [ ] Set up conversion tracking

---

*Last Updated: January 30, 2026*
*Pixel ID: 1428342818806779*
*Status: Ready for deployment* ✅
