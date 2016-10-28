module.exports = function () {
    this.config = {
        collapse: false,
        skin: 'blue'
    }

    this.collapseSidebar = () => {
        this.config.collapse = !this.config.collapse;
    }

    this.getConfig = () => this.config;

    this.setSkin = (skin) => {
        this.config.skin = skin;
    }

    this.init = function (options) {
        angular.extend(this.config, options);
    }
}