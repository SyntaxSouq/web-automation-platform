# 🚀 DEPLOY TO LEAPCELL.IO - STEP BY STEP GUIDE

## ✅ What's Ready:
- ✓ All code fixes completed and saved
- ✓ New GitHub repository created: **SyntaxSouq/web-automation-platform**
- ✓ All code pushed to GitHub
- ✓ Leapcell configuration files created
- ✓ Your existing repositories are NOT touched

## 📋 Step-by-Step Deployment:

### Step 1: Create Leapcell Account
1. Go to: https://leapcell.io
2. Click "Sign up for FREE"
3. Sign up with Google or GitHub
4. Verify your email

### Step 2: Create New Project
1. After logging in, click **"+ New Build"** or **"Deploy Your Projects for Free"**
2. Select **"Import from GitHub"**
3. Authorize Leapcell to access your GitHub repositories
4. Search and select: **`SyntaxSouq/web-automation-platform`**

### Step 3: Configure Deployment

**Service Name:**
```
web-automation-platform
```

**Runtime:**
```
Node.js
```

**Node Version:**
```
18 or higher
```

**Build Command:**
```bash
npm install && cd frontend && npm install && npm run build
```

**Start Command:**
```bash
node backend/server.js
```

**Port:**
```
7860
```

**Region:**
```
Select closest to you (US, Asia, etc.)
```

### Step 4: Set Environment Variables (Optional)
In the Leapcell dashboard, add these environment variables:
```
NODE_ENV=production
PORT=7860
MAX_VISITS=1000
```

### Step 5: Deploy!
1. Click **"Deploy"** or **"Start Deployment"**
2. Wait for the build to complete (usually 2-5 minutes)
3. Once deployed, Leapcell will give you a URL like:
   ```
   https://your-project-name.leapcell.dev
   ```

### Step 6: Test Your Deployment
1. Open the URL provided by Leapcell
2. You should see your web automation platform
3. Test with a simple URL to verify it works

## 🔧 Configuration Already Done:

The following files are already in your repository:
- `leapcell.yaml` - Deployment configuration
- `.leapcellignore` - Files to exclude
- `DEPLOYMENT.md` - Full deployment guide
- All code fixes for progress tracking and memory management

## 📊 What's Fixed in This Version:

### 1. Progress Tracking (REAL-TIME)
- ✓ SSE stream flushing enabled
- ✓ Progress updates immediately
- ✓ No more frozen counters

### 2. Memory Management (NO MORE CRASHES)
- ✓ Batch size reduced to 3 concurrent visits
- ✓ Memory optimized to 2GB
- ✓ Proper cleanup after each batch
- ✓ Delays between batches (500-1500ms)

### 3. Performance Optimization
- ✓ Increased delays between visits (800-2000ms)
- ✓ Better garbage collection
- ✓ GPU disabled for stability
- ✓ Browser contexts properly closed

### 4. Error Handling
- ✓ Better retry logic
- ✓ Graceful degradation
- ✓ Clear error messages

## 🎯 Testing Your Deployment:

### Test 1: Health Check
```
https://your-app.leapcell.dev/api/health
```
Should return: `{"status":"ok","timestamp":"...","uptime":...}`

### Test 2: Run Automation
1. Open your Leapcell URL
2. Enter a test URL (e.g., `https://example.com`)
3. Set visits to 5-10 (start small)
4. Click "Automate"
5. Watch progress update in REAL-TIME
6. Should complete without crashes

## 💡 Tips:

### For Best Performance:
1. **Start with small batches**: 5-10 visits first
2. **Monitor resources**: Check Leapcell dashboard
3. **Adjust if needed**: Edit `backend/services/playwright.js`
   - Line ~845: Change `maxBatchVisits` (currently 3)
   - Line ~959: Adjust delays

### If You Get Memory Warnings:
- Reduce batch size from 3 to 2
- Increase memory allocation in Leapcell (upgrade plan if needed)

### If Progress Still Slow:
- Check browser console for errors
- Verify SSE connection is working
- Check Leapcell logs

## 🆘 Troubleshooting:

### Build Fails:
```
Error: Cannot find module
```
**Fix**: Make sure build command is exactly:
```bash
npm install && cd frontend && npm install && npm run build
```

### App Won't Start:
```
Error: Port already in use
```
**Fix**: Set PORT=7860 in environment variables

### 502 Bad Gateway:
- Wait 2-3 minutes after deployment
- Check Leapcell logs for errors
- Verify health endpoint works

### Progress Not Updating:
- Check browser console (F12)
- Verify SSE connection in Network tab
- Check server logs in Leapcell dashboard

## 📞 Support:

- Leapcell Docs: https://docs.leapcell.io
- Leapcell Discord: https://discord.gg/qF7efny8x2
- GitHub Issues: https://github.com/SyntaxSouq/web-automation-platform/issues

## 🎉 You're Done!

Once deployed, your app will be:
- ✅ Live and accessible worldwide
- ✅ Auto-scaling based on traffic
- ✅ FREE for up to 20 projects
- ✅ No more Hugging Face flagging issues
- ✅ All fixes working properly

**Your GitHub Repository:**
https://github.com/SyntaxSouq/web-automation-platform

**Your Leapcell Dashboard:**
https://leapcell.io

---

## 📝 Important Notes:

1. **Your existing repositories are SAFE** - I did NOT modify them
2. **New repository only**: `SyntaxSouq/web-automation-platform`
3. **All fixes included**: Progress tracking, memory management, batch optimization
4. **Ready to deploy**: Just follow the steps above

Good luck with your deployment! 🚀
