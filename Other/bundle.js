(function() {
    "use strict";
    
    // 页面加载完成后执行
    function init() {
        console.log('页面初始化完成');
        
        // 安全的环境检查
        const environmentCheck = {
            checkCompatibility: function() {
                try {
                    return {
                        cookiesEnabled: navigator.cookieEnabled,
                        javascriptEnabled: true,
                        localstorage: typeof localStorage !== 'undefined'
                    };
                } catch (error) {
                    console.warn('环境检查失败:', error);
                    return { error: error.message };
                }
            }
        };
        
        // 执行环境检查
        const envStatus = environmentCheck.checkCompatibility();
        console.log('环境状态:', envStatus);
        
        // 安全的事件处理
        function setupEventHandlers() {
            // 添加基本的错误处理
            window.addEventListener('error', function(e) {
                console.error('脚本错误:', e.error);
            });
            
            // 页面可见性变化处理
            document.addEventListener('visibilitychange', function() {
                if (!document.hidden) {
                    console.log('页面变为可见');
                }
            });
        }
        
        // 初始化事件处理器
        setupEventHandlers();
        
        // 安全的DOM操作
        function safeDOMOperations() {
            try {
                // 检查必要的DOM元素
                const titleElement = document.querySelector('title');
                if (titleElement && titleElement.textContent === 'Redirecting...') {
                    // 更新标题为更合适的内容
                    titleElement.textContent = document.title || '页面加载完成';
                }
                
                // 确保body存在且可访问
                if (document.body) {
                    document.body.style.minHeight = '100vh';
                }
                
            } catch (error) {
                console.warn('DOM操作被阻止:', error);
            }
        }
        
        safeDOMOperations();
        
        // 性能监控（仅用于调试）
        function monitorPerformance() {
            if ('performance' in window) {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`页面加载时间: ${loadTime}ms`);
            }
        }
        
        // 在合适的时机执行性能监控
        if (document.readyState === 'complete') {
            monitorPerformance();
        } else {
            window.addEventListener('load', monitorPerformance);
        }
    }
    
    // 安全的启动函数
    function safeStartup() {
        try {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }
        } catch (error) {
            console.error('启动失败:', error);
            // 优雅降级 - 至少确保页面基本功能
            if (document.body) {
                document.body.innerHTML = '<div>页面加载完成</div>';
            }
        }
    }
    
    // 启动应用
    safeStartup();
    
})();
