## September Assignment

```
# minikube on ec2 to localhost (url)

- ssh -L 8080:192.168.49.2:31092 ubuntu@34.238.155.19

---
Install your runner as a service

GitHub provides a built-in way to keep the runner running always, even after reboots.

From inside your actions-runner directory:

sudo ./svc.sh install
sudo ./svc.sh start


install → registers the runner as a systemd service

start → starts it in the background

Check status
sudo ./svc.sh status
```