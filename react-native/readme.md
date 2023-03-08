# 初始化react-native项目(基于0.71 macOs-m1)
homebrew node watchman npm 这些就不说了，官网有
## 安装ruby
建议使用RVM

1、安装rvm
```shell
curl -L get.rvm.io | bash -s stable // 安装rvm

source ~/.bashrc // bash下能使用

source ~/.bash_profile // 环境变量生效
```

2、查看版本
```shell
rvm -v
```

3、安装ruby版本(0.71需要2.7.6，具体需要进入到项目，查看所需版本cat .ruby-version)，安装完需要重新打开terminal
```shell
rvm -v
rvm install 2.7.6
ruby -v
```

4、gem换源
```shell
sudo gem update --system

gem sources --remove https://rubygems.org/

gem sources --add https://gems.ruby-china.com/
```

5、初始化项目
```shell
npx react-native init AwesomeProject
```
在installing cocoapods dependencies时卡住，而且没成功过
image.png

6、初始化时跳过安装，然后进入到项目里安装，就成功了
```shell
npx react-native init testProject --skip-install
cd testProject
yarn install
cd ios

// intel
bundle install
bundle exec pod install

// m1
arch -arm64 bundle install
arch -arm64 bundle exec pod install
```