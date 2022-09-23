User:

```
curl "https://graph.microsoft.com/v1.0/me?^$select=id,displayName" ^
  -H "Accept: */*" ^
  -H "Accept-Language: en-US,en;q=0.9" ^
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IjY3M3V3dUtLVXM4OVhtTS13Zmhuc0lENkwydUtnOXVMSXJtVnFuT2NJaTQiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MWQzM2JkZi1lY2E0LTRmMTAtYTUxYS1kYTE0ZjZjYmU5NzUvIiwiaWF0IjoxNjYzODk5NjY5LCJuYmYiOjE2NjM4OTk2NjksImV4cCI6MTY2MzkwNDg1MywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQUtzNnpoTWc0cVk4bkkvemp1dTJBRnR2L3RObjhEVS9XWWlKVTUvVjBCWW0wcFFvYUx3MlE0NStaU2tBK3BpYUsrNXd6L1MycmxDQ3V0SUxOcXpxbFN3PT0iLCJhbHRzZWNpZCI6IjE6bGl2ZS5jb206MDAwMzAwMDBCNjZBNkNFQiIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiT25lZHJpdmUgUE9DIiwiYXBwaWQiOiJhOGU3ZjcwZC1hZjg4LTRiYzgtOWVjOS01YjNkMmRkNjc2MDAiLCJhcHBpZGFjciI6IjAiLCJlbWFpbCI6ImNvb2xnb21zaUBsaXZlLmNvbSIsImZhbWlseV9uYW1lIjoiam9zaGkiLCJnaXZlbl9uYW1lIjoiZ29tc2kiLCJpZHAiOiJsaXZlLmNvbSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjkyLjk4LjQxLjIxOSIsIm5hbWUiOiJnb21zaSBqb3NoaSIsIm9pZCI6IjU2MmE4ZDk4LTdjNjAtNDdjZS04YjdjLTcyMzYzNDViNGJmMiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMjMzMUM1MkQ4IiwicmgiOiIwLkFZSUEzenZUY2FUc0VFLWxHdG9VOXN2cGRRTUFBQUFBQUFBQXdBQUFBQUFBQUFDVkFGQS4iLCJzY3AiOiJGaWxlcy5SZWFkIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImRqQTA0Um04ak5OOHFyR3NoZ0U3VnJTc21uTkxzUTZpd2doTHlpTG5IekUiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI3MWQzM2JkZi1lY2E0LTRmMTAtYTUxYS1kYTE0ZjZjYmU5NzUiLCJ1bmlxdWVfbmFtZSI6ImxpdmUuY29tI2Nvb2xnb21zaUBsaXZlLmNvbSIsInV0aSI6IjZPdEdibXJ4Q0VpZDdpVklmSG9GQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoieVFmZ3Q3WWhQamhuV05uUDllbnJvNTJPV3EzbW5HMHlfZWdoQjktYVBKQSJ9LCJ4bXNfdGNkdCI6MTY2Mzc2OTg4NX0.vaaGTvL5l_2CEn62dc65XXH4ALf_IZDMCUVv7UUq90Yb5KMk8hDCWh9mY6aXeZcEluE5Hhw-gK9VQePsjGElENWDMlK_JLx4v3emgsLKAlKe4dcetmx8I1jtorCLHJnTjD9P-IwKthnMQ2zCouBGLB514EuUcmeGkHowCACnFgIwK1ZtQdEgtglU9uR3BiWoDkl1huvqWlZbNbprCPtE1rbbkSenXMtsM5Rl9ew-GRoQJjAFRbG9064wN8EtUMOMkHZ_eUniAdgqHTYXM7IVry8c1qyZKG-8ncY_SwkBM0dYCywFmfMWJdqBkRxTUpR9r8psk9gJU2MtcAI9RDDbvA" ^
  -H "Cache-Control: no-cache" ^
  -H "Connection: keep-alive" ^
  -H "Origin: http://localhost:8080" ^
  -H "Pragma: no-cache" ^
  -H "Referer: http://localhost:8080/" ^
  -H "SdkVersion: graph-js/3.0.2 (featureUsage=6)" ^
  -H "Sec-Fetch-Dest: empty" ^
  -H "Sec-Fetch-Mode: cors" ^
  -H "Sec-Fetch-Site: cross-site" ^
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36" ^
  -H "client-request-id: c539ebb6-402a-6303-422e-7247cfbc64c1" ^
  -H "sec-ch-ua: ^\^"Google Chrome^\^";v=^\^"105^\^", ^\^"Not)A;Brand^\^";v=^\^"8^\^", ^\^"Chromium^\^";v=^\^"105^\^"" ^
  -H "sec-ch-ua-mobile: ?0" ^
  -H "sec-ch-ua-platform: ^\^"Windows^\^"" ^
  --compressed
  ```


Onedrive files:
```
curl "https://graph.microsoft.com/v1.0/me/drive/root/children?^$select=id,name,folder,package" ^
  -H "Accept: */*" ^
  -H "Accept-Language: en-US,en;q=0.9" ^
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IjY3M3V3dUtLVXM4OVhtTS13Zmhuc0lENkwydUtnOXVMSXJtVnFuT2NJaTQiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MWQzM2JkZi1lY2E0LTRmMTAtYTUxYS1kYTE0ZjZjYmU5NzUvIiwiaWF0IjoxNjYzODk5NjY5LCJuYmYiOjE2NjM4OTk2NjksImV4cCI6MTY2MzkwNDg1MywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQUtzNnpoTWc0cVk4bkkvemp1dTJBRnR2L3RObjhEVS9XWWlKVTUvVjBCWW0wcFFvYUx3MlE0NStaU2tBK3BpYUsrNXd6L1MycmxDQ3V0SUxOcXpxbFN3PT0iLCJhbHRzZWNpZCI6IjE6bGl2ZS5jb206MDAwMzAwMDBCNjZBNkNFQiIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiT25lZHJpdmUgUE9DIiwiYXBwaWQiOiJhOGU3ZjcwZC1hZjg4LTRiYzgtOWVjOS01YjNkMmRkNjc2MDAiLCJhcHBpZGFjciI6IjAiLCJlbWFpbCI6ImNvb2xnb21zaUBsaXZlLmNvbSIsImZhbWlseV9uYW1lIjoiam9zaGkiLCJnaXZlbl9uYW1lIjoiZ29tc2kiLCJpZHAiOiJsaXZlLmNvbSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjkyLjk4LjQxLjIxOSIsIm5hbWUiOiJnb21zaSBqb3NoaSIsIm9pZCI6IjU2MmE4ZDk4LTdjNjAtNDdjZS04YjdjLTcyMzYzNDViNGJmMiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMjMzMUM1MkQ4IiwicmgiOiIwLkFZSUEzenZUY2FUc0VFLWxHdG9VOXN2cGRRTUFBQUFBQUFBQXdBQUFBQUFBQUFDVkFGQS4iLCJzY3AiOiJGaWxlcy5SZWFkIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImRqQTA0Um04ak5OOHFyR3NoZ0U3VnJTc21uTkxzUTZpd2doTHlpTG5IekUiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI3MWQzM2JkZi1lY2E0LTRmMTAtYTUxYS1kYTE0ZjZjYmU5NzUiLCJ1bmlxdWVfbmFtZSI6ImxpdmUuY29tI2Nvb2xnb21zaUBsaXZlLmNvbSIsInV0aSI6IjZPdEdibXJ4Q0VpZDdpVklmSG9GQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoieVFmZ3Q3WWhQamhuV05uUDllbnJvNTJPV3EzbW5HMHlfZWdoQjktYVBKQSJ9LCJ4bXNfdGNkdCI6MTY2Mzc2OTg4NX0.vaaGTvL5l_2CEn62dc65XXH4ALf_IZDMCUVv7UUq90Yb5KMk8hDCWh9mY6aXeZcEluE5Hhw-gK9VQePsjGElENWDMlK_JLx4v3emgsLKAlKe4dcetmx8I1jtorCLHJnTjD9P-IwKthnMQ2zCouBGLB514EuUcmeGkHowCACnFgIwK1ZtQdEgtglU9uR3BiWoDkl1huvqWlZbNbprCPtE1rbbkSenXMtsM5Rl9ew-GRoQJjAFRbG9064wN8EtUMOMkHZ_eUniAdgqHTYXM7IVry8c1qyZKG-8ncY_SwkBM0dYCywFmfMWJdqBkRxTUpR9r8psk9gJU2MtcAI9RDDbvA" ^
  -H "Cache-Control: no-cache" ^
  -H "Connection: keep-alive" ^
  -H "Origin: http://localhost:8080" ^
  -H "Pragma: no-cache" ^
  -H "Referer: http://localhost:8080/" ^
  -H "SdkVersion: graph-js/3.0.2 (featureUsage=6)" ^
  -H "Sec-Fetch-Dest: empty" ^
  -H "Sec-Fetch-Mode: cors" ^
  -H "Sec-Fetch-Site: cross-site" ^
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36" ^
  -H "client-request-id: 3ec1470c-e850-f423-ee3c-bbe0b7b9e0a0" ^
  -H "sec-ch-ua: ^\^"Google Chrome^\^";v=^\^"105^\^", ^\^"Not)A;Brand^\^";v=^\^"8^\^", ^\^"Chromium^\^";v=^\^"105^\^"" ^
  -H "sec-ch-ua-mobile: ?0" ^
  -H "sec-ch-ua-platform: ^\^"Windows^\^"" ^
  --compressed
```