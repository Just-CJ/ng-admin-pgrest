.PHONY: build

install:
	@npm install

build: copy-ng-admin
	@./node_modules/.bin/webpack  --progress --colors --devtool source-map

copy-ng-admin:
	@cp ./node_modules/ng-admin/build/ng-admin.min.js build/
	@cp ./node_modules/ng-admin/build/ng-admin.min.js.map build/

run: copy-ng-admin
	@echo "**************************************************"
	@echo "* open http://localhost:12345/webpack-dev-server/ *"
	@echo "**************************************************"
	@./node_modules/.bin/webpack-dev-server --progress --colors --devtool cheap-module-inline-source-map --hot --inline \
        --host 10.76.6.118 --port 12345

