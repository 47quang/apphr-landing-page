## APPHR Landing Page

Trang chủ của hệ thống `APPHR` (Đề tài luận văn tốt nghiệp)

Các công nghệ sử dụng
- Thư viện `React`
- Framework UI `Ant Design`
- Thư viện hỗ trợ đa ngôn ngữ `i18n`
- Animation với `react reveal`
- Và một số thư viện khác


Để deploy ứng dụng lên `heroku server`, làm theo các bước
- Tạo và chỉnh sửa tệp `server.js`
- Chạy lệnh `npm run build`
- Login vào `heroku` thông qua `command line`: `heroku login`
- Tạo `repo` cho ứng dụng trên `source version control` của `heroku`: `heroku create [domain_name]`
- Chỉnh sửa tệp `package.json`: thêm `"start": "node server/server.js"` vào `script`
- Commit code
- Cuối cùng chạy lệnh: `git push heroku master`
